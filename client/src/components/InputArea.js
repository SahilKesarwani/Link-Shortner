import React from "react";

const InputArea = () => {
    return (
        <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
            <label for="floatingTextarea2">Enter your url here.</label>
            <button type="button" class="btn btn-primary">
                Submit
            </button>
        </div>
    );
};

export default InputArea;
