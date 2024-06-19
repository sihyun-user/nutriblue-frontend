interface ApiResponse {
  status: boolean;
  message: string;
  data: any;
}

export default async function getApi(
  url: string,
  uploadData: any = undefined
): Promise<ApiResponse> {
  const fetchPro = uploadData
    ? fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(uploadData)
      })
    : fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/v1/${url}`);

  const res = await fetchPro;

  const data = await res.json();

  return data;
}
