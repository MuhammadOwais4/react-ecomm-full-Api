import React from "react";
import "./Admin.css";
import { Avatar, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <div className="AdminNavbar" style={{ marginBottom: "30px" }}>
      <div>
        <h1>
          <Link to="/">
            <img
              style={{ height: "30px", cursor: "pointer" }}
              src="data:image/png;base64,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"
              alt=""
            />
          </Link>
        </h1>
      </div>

      <div>
        <h1>Admin's Page</h1>
      </div>

      <Stack direction="row">
        <Avatar
          name="Nitin Jambal"
          src="https://bit.ly/broken-link"
          cursor={"pointer"}
        />
      </Stack>
    </div>
  );
}

export default AdminNavbar;
