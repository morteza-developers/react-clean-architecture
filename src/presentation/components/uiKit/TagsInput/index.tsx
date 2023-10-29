import { Cancel } from "@mui/icons-material";
import { Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { KeyboardEventHandler, useRef, useState } from "react";

const Tags = ({ data, handleDelete }: any) => {
  return (
    <Box
      sx={{
        background: "#283240",
        height: "100%",
        display: "flex",
        padding: "0px 0.4rem",
        margin: "0 0.5rem 0 0",
        justifyContent: "center",
        alignContent: "center",
        color: "#ffffff",
      }}
    >
      <Stack direction="row" gap={1}>
        <Typography>{data}</Typography>
        <Cancel
          sx={{ cursor: "pointer" }}
          onClick={() => {
            handleDelete(data);
          }}
        />
      </Stack>
    </Box>
  );
};

export default function TagsInput() {
  const [tags, SetTags] = useState<any[]>([]);
  const tagRef = useRef<any>(null);

  const handleDelete = (value: any) => {
    const newtags = tags.filter((val) => val !== value);
    SetTags(newtags);
  };
  const handleOnSubmit: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key == "Enter") {
      if (tagRef?.current) {
        SetTags([...tags, tagRef.current?.value]);
        tagRef.current.value = "";
      }
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <TextField
        onKeyDown={handleOnSubmit}
        inputRef={tagRef}
        fullWidth
        multiline
        margin="none"
        placeholder={tags.length < 5 ? "Enter tags" : ""}
        InputProps={{
          size: "small",
          startAdornment: (
            <Box
              sx={{
                margin: "0 0.2rem 0 0",
                display: "flex",
              }}
            >
              {tags.map((data, index) => {
                return (
                  <Tags data={data} handleDelete={handleDelete} key={index} />
                );
              })}
            </Box>
          ),
        }}
      />
    </Box>
  );
}
