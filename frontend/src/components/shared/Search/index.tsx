import { ChangeEvent, memo, useState } from "react";
import styled from "styled-components";
import searchIcon from "../../../assets/images/search.svg";
import { SearchProps } from "../../../types";

const Search: React.FC<SearchProps> = memo(
  ({ setSearchValue, searchValue }) => {
    console.log("search");

    const [inputFocus, setInputFocus] = useState(false);
    const handleFocus = () => {
      setInputFocus(true);
    };

    const handleBlur = () => {
      setInputFocus(false);
    };

    const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    };

    return (
      <Wrapper>
        {inputFocus || <Image src={searchIcon} />}

        <Input
          value={searchValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChangeInputValue}
          type="text"
          placeholder={
            inputFocus
              ? ""
              : "Search partners, drive types, vehicles, kit IDs, and drive IDs suggestion"
          }
        />
      </Wrapper>
    );
  }
);

export default Search;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border: 1px solid #e3e8e5;
  border-radius: 8px;
  padding: 0 16px;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: fit-content;
  appearance: none;
  border: none;
  outline: none;
  font-size: 16px;
`;

const Image = styled.img``;
