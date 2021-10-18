import React from "react";
import "./css/table.css";

const Table = () => {
    return (
        <div className="table-responsive">
            <table className="table table-dark table-hover table-bordered table-striped text-center" id="main-table">
                <thead>
                    <tr>
                        <th>Date Created</th>
                        <th>Full Link</th>
                        <th>ShortLink</th>
                        <th>Clicks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>19/10/21</td>
                        <td className="L_Link">https://www.youtube.com/dfshdsbbdhfbhuwhfbuwefbubyrbfhdvbhvbusbvwye364376473ygfeygf7373fg6ggfgerfyhdhbvdbvury765b75b7eyvybyvbeyr7364bey7ydhudsuysv73743gf7346fye</td>
                        <td>https://localhost:8000/ghgfhd</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
