
import { useContext } from "react";
import { useParams } from 'react-router-dom';
import { CookieContext } from "../../context/userContext";
import useInputState from "../../hooks/useInputState"
import axios from "axios";

export default function CommentForm() {
    const { cookie } = useContext(CookieContext);
    const params = useParams();

    const [comment, setComment, resetComment] = useInputState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios.post("http://localhost:8080/comment/create",
            { email: cookie.email, comment, postId: params.id },
            { withCredentials: true }
        )
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
        // console.log(comment);
        // console.log(params.id);
        resetComment();
    }

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-floating">
                <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                    value={comment}
                    onChange={setComment}
                >
                </textarea>
                <label htmlFor="floatingTextarea2">Add your comment</label>
            </div>

            <button
                type="submit"
                className="btn btn-danger fw-bold mt-2"
                style={{ backgroundColor: "rgb(215, 86, 0)", borderColor: "rgb(215, 86, 0)" }}
            >
                Submit
            </button>
        </form>
    )
}
