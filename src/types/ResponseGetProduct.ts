export interface ResponseGetProduct {
  data: {
    id: number
    attributes: {
      name: string;
      description: string, 
      price: string, 
      createdAt: string, 
      updatedAt: string
      publishedAt: string
      image: {
        data: {
          id: number,
          attributes: {
            formats: {
              thumbnail: {
                url: string
              }
            }
          }
        }
      }
    }
  }
}