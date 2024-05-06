import React from "react";

export default function Editor({ params }: { params: { editorId: string } }) {
  return <div>My Post: {params.editorId}</div>;
}
