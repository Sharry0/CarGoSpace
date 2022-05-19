


export default function DeletePopup({handleDeleteClick}) {

    const popupStyling = {
        background: "rgba(0,0,0,0.5)",
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "1000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    // const messageStyling = {
    //     height: "20%",
    //     width: "50%",
    //     background: "white",

    // }

    return (
        <div style={popupStyling}>
            <div className="card">
                <div className="card-header">
                    ⚠️ Warning ⚠️
                </div>
                <div className="card-body">
                    <h5 className="card-title">Are you sure you want to delete this post?</h5>
                    <p className="card-text">Deleting this post can't be undone.</p>
                    <button className="btn btn-danger me-3" onClick={()=> handleDeleteClick("delete")} >Delete</button>
                    <button className="btn btn-secondary" onClick={()=> handleDeleteClick("cancel")} >Cancel</button>
                </div>
            </div>
        </div>
    )
}
