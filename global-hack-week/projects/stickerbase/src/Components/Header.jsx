import React from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Stickerbase</a>
            </li>

            <li>
              <form action="/" method="get">
                <Input type="search" name="q" />
                <Button variant="contained" type="submit">
                  q
                </Button>
              </form>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
