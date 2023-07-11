export interface ResponseGetAllProducts {
  data: Array<{
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
  }>
}