import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useState } from "react";

const App = () => {
    const [userData, setUserData] = useState("");
    const [isEditing, setIsEditing] = useState(true);

    return (
        <div className="container mt-3">
            {isEditing ? (
                <>
                    <CKEditor
                        editor={ClassicEditor}
                        data={userData}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setUserData(data);
                        }}
                        config={{
                            placeholder: "Start typing your blog post here...",

                            toolbar: {
                                items: [
                                    "heading",
                                    "|",
                                    "bold",
                                    "italic",
                                    "link",
                                    "bulletedList",
                                    "numberedList",
                                    "|",
                                    "undo",
                                    "redo",
                                ],
                                shouldNotGroupWhenFull: true,
                            },
                        }}
                    />

                    <button
                        type="button"
                        className="btn btn-primary mt-3"
                        onClick={() => setIsEditing(!Boolean(userData))}
                    >
                        Save
                    </button>
                </>
            ) : (
                <>
                    <div
                        className="post-body"
                        dangerouslySetInnerHTML={{
                            __html: userData,
                        }}
                    />

                    <button
                        type="button"
                        className="btn btn-primary mt-3"
                        onClick={() => setIsEditing(true)}
                    >
                        Edit
                    </button>
                </>
            )}
        </div>
    );
};

export default App;
