import { apiUrl } from "./helper";

export const apiService = async (url: string) => {
  const mainUrl = `${apiUrl}/${url}`;
  try {
    const response = await fetch(mainUrl);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error ${response.status}: ${errorText}`);
    }
    const data: any = await response.json();
    return data.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Fetch error:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
