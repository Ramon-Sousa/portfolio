"use server";
import { Client } from "@notionhq/client";
import { NotionDatabaseResponse } from "../_types/notion";
import { NotionToMarkdown } from "notion-to-md";
import { title } from "process";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const DATABASE_ID = "5180605120d347e8bde6fd3ba89f50fd";
export async function getProjects() {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      or: [
        {
          property: "status",
          multi_select: {
            contains: "production",
          },
        },
      ],
    },
    sorts: [
      {
        property: "publishedAt",
        direction: "descending",
      },
    ],
  });
  console.log(response);
  const typedResponse = response as unknown as NotionDatabaseResponse;
  return typedResponse.results.map((project) => {
    let coverUrl = null;
    if (project.cover?.type === 'file') { // Se existir capa E for tipo 'file'
      coverUrl = project.cover.file.url; 
    } else if (project.cover?.type === 'external') { // Se existir capa E for tipo 'external'
      coverUrl = project.cover.external.url;
    } 
    return {
      id: project.id,
      title: project.properties.title.title[0].plain_text,
      slug: project.properties.slug.rich_text[0].plain_text,
      tags: project.properties.tags.multi_select.map((tag) => tag.name),
      publishedAt: project.properties.publishedAt.number,
      createdAt: project.created_time,
      cover: coverUrl, 
      
    };
  });
}
export async function getProject(slug: string) {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      or: [
        {
          property: "slug",
          rich_text: {
            equals: slug,
          },
        },
      ],
    },
  });
  const pageId = response.results[0].id;
  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return {
    title: response.results[0].properties.title.title[0].plain_text,
    content: mdString.parent,
  };
}
