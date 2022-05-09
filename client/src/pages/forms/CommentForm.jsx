
import { useContext } from "react";
import { CookieContext } from "../../context/userContext";
import useInputState from "../../hooks/useInputState"

export default function CommentForm() {
    const { cookie } = useContext(CookieContext)

    const [textarea, setTextarea, resetTextarea] = useInputState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(textarea);
        console.log(cookie);
        resetTextarea();
    }

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-floating">
                <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: "100px" }}
                    value={textarea}
                    onChange={setTextarea}
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
