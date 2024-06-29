import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Users
  const user1 = await prisma.user.create({
    data: {
      name: 'John Doe',
      imageProfile: 'https://example.com/profiles/johndoe.jpg',
      email: 'johndoe@example.com',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Jane Smith',
      imageProfile: 'https://example.com/profiles/janesmith.jpg',
      email: 'janesmith@example.com',
    },
  });

  // Seed Categories
  const category1 = await prisma.category.create({
    data: {
      title: 'Technology',
      description: 'All about the latest tech trends',
      slug: 'technology',
    },
  });

  const category2 = await prisma.category.create({
    data: {
      title: 'Health',
      description: 'Health tips and news',
      slug: 'health',
    },
  });

  // Seed Projects
  const project1 = await prisma.project.create({
    data: {
      title: 'New AI Technology',
      slug: 'new-ai-technology',
      content: 'Content about new AI technology...',
      status: 'In Progress',
      isPublished: true,
      createdOn: new Date(),
      publishedOn: new Date(),
      category: {
        connect: { id: category1.id },
      },
    },
  });

  const project2 = await prisma.project.create({
    data: {
      title: 'Healthy Living Tips',
      slug: 'healthy-living-tips',
      content: 'Content about healthy living...',
      status: 'Completed',
      isPublished: true,
      createdOn: new Date(),
      publishedOn: new Date(),
      category: {
        connect: { id: category2.id },
      },
    },
  });

  // Seed PostCategories
  const postCategory1 = await prisma.postCategories.create({
    data: {
      projectId: project1.id.toString(),
      categoryId: category1.id.toString(),
    },
  });

  const postCategory2 = await prisma.postCategories.create({
    data: {
      projectId: project2.id.toString(),
      categoryId: category2.id.toString(),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
