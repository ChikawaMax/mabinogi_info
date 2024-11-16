import { Client } from '@notionhq/client';

export const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});

export const fetchNotionData = async (databaseId: string) => {
  try {
    const response = await notion.databases.query({ database_id: databaseId });
    return response.results;
  } catch (error) {
    console.error('Failed to fetch Notion data:', error);
    throw new Error('Failed to fetch Notion data');
  }
};
