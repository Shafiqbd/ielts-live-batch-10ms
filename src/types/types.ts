//  Social Media Props
export interface Overview {
  title: string;
  description: string;
}

export interface MediaType {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: string;
  text: string;
}
