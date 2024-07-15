import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const categories = await prisma.category.createMany({
    data: [
      { title: 'UI/UX Design', description: 'User interface and user experience design projects', slug: 'ui-ux-design' },
      { title: 'Web Development', description: 'Web development projects', slug: 'web-development' },
      { title: 'Mobile Development', description: 'Mobile app development projects', slug: 'mobile-development' },
      // Add more categories as needed
    ],
  });

  // Create projects (with associated categories) - One by One
  for (const projectData of [
    { 
      title: 'Projeto A', 
      slug: 'projeto-a', 
      content: 'Descrição do Projeto A', 
      status: 'completed', 
      isPublished: true, 
      publishedOn: new Date(),
      categoryIds: [categories.count, categories.count + 1], // Connect categories using IDs
    },
    // ... more project data objects 
  ]) {
    await prisma.project.create({
      data: {
        ...projectData,
        category: {
          connect: projectData.categoryIds.map(categoryId => ({ id: categoryId })),
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
