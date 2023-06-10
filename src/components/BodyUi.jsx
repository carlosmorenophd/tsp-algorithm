import { Alert, Box, Button, Snackbar, Typography } from "@mui/material";
import RouteIcon from "@mui/icons-material/Route";
import MatrixData from "./MatrixData";
import React from "react";
import Tree from "react-d3-tree";
import useBodyUi from "./use-bodyUi";
import { ListResult } from "./ListResult";
import Parameter from "./ParameterList";

const BodyUi = (props) => {
  const {
    alert,
    data,
    method,
    result,
    tree,

    handleAlertClose,
    handleChangeMatrixValue,
    handleChangeMethod,
    handleMatrixAdd,
    handleMatrixRemove,
    handleResult,
  } = useBodyUi({
    init: {
      data: [
        [0, 10, 15, 20],
        [10, 0, 35, 25],
        [15, 35, 0, 30],
        [20, 25, 30, 0],
      ],
      result: [],
    },
  });

  return (
    <Box sx={{ m: 1, p: 2, height: "100%" }} minHeight="100%">
      <Typography variant="body1" component="div">
        Data:
      </Typography>
      <Box>
        <MatrixData
          matrix={data}
          onChangeValue={handleChangeMatrixValue}
          onAdd={handleMatrixAdd}
          onRemove={handleMatrixRemove}
          readOnlyMode="mainDiagonal"
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Parameter
          id="method"
          label="Method"
          list={[{ value: 1, text: "Dynamic Programming" }]}
          value={method}
          onChange={handleChangeMethod}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          endIcon={<RouteIcon />}
          onClick={handleResult}
        >
          Get minimal path
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        <ListResult data={result} title={`Multistage result: `} columns={["cost", "path"]} />
      </Box>
      <Snackbar open={alert} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert
          onClose={handleAlertClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          The size of matrix must be 2 or more!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BodyUi;
