import Link from "next/link";
import NavbarAdmin from "./NavbarAdmin";
import DeleteBlog from "@/lib/DeleteBlog";

const getPost = async () => {
  let data = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blog`, {
    cache: "no-cache",
  });
  data = await data.json();

  if (data.success) {
    return data.result;
  } else {
    return [];
  }
};

export default async function Page() {
  const posts = await getPost();

  return (
    <main>
      <NavbarAdmin />
      <div className="ml-40 p-4">
        {" "}
        {/* ADDED ml-40 */}
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Catagory</th>
              <th>Content</th>
              <th>CreatedAt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.category}</td>
               <td>{item.content.length > 50
                  ? item.content.substring(0, 50) + "..."
                  : item.content}</td> 
                <td>{item.createdAt}</td>
                <td>
                  <Link
                    style={{
                      backgroundColor: "#007FFF",
                      marginRight: "8px",

                      border: "none",
                      outline: "none",
                      padding: "6px 8px",
                      color: "white",
                      borderRadius: "6px",
                      cursor: "pointer",
                      gap: "4px",
                      textAlign: "center",
                    }}
                    href={"/admin/" + item._id}
                  >
                    Edit
                  </Link>
                  <DeleteBlog id= {item._id}/>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
