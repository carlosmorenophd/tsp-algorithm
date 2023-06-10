import { useState } from "react";
import { useAlgorithm } from "../code/use-algorithm";

const useBodyUi = ({ init }) => {
  const { dynamicProgramming, branchBound } = useAlgorithm();
  const [data, setData] = useState(init.data);
  const [alert, setAlert] = useState(false);
  const [result, setResult] = useState(init.result);
  const [method, setMethod] = useState(init.method);
  const [tree, setTree] = useState({
    name: "Tree expansion",
    attributes: {
      tag: "Parent",
    },
    children: [],
  });

  const handleAlertClose = () => {
    setAlert(false);
  };

  const handleMatrixAdd = () => {
    setData((prev) => {
      let newMatrix = prev;
      newMatrix = newMatrix.map((row) => {
        row.push(0);
        return row;
      });
      newMatrix.push(Array(prev.length + 1).fill(0));
      return newMatrix;
    });
  };

  const handleMatrixRemove = () => {
    if (data.length === 2) {
      setAlert(true);
    } else {
      setData((prev) => {
        let newMatrix = prev;
        newMatrix = newMatrix.map((row) => {
          row.pop();
          return row;
        });
        newMatrix.pop();
        return newMatrix;
      });
    }
  };

  const handleChangeMatrixValue = (event) => {
    const ids = event.target.id.split("-");
    setData((prev) =>
      prev.map((row, rowIndex) =>
        rowIndex === parseInt(ids[1])
          ? row.map((cell, cellIndex) =>
              cellIndex === parseInt(ids[2]) ? event.target.valueAsNumber : cell
            )
          : row
      )
    );
  };

  const handleChangeListValue = (event) => {
    setData((prev) =>
      prev.map((cell, cellIndex) =>
        cellIndex === parseInt(event.target.name)
          ? event.target.valueAsNumber
          : cell
      )
    );
  };

  const handleListAdd = () => {
    setData((prev) => {
      let newData = prev;
      newData.push(0);
      return newData.map((d) => d);
    });
  };

  const handleListRemove = () => {
    setData((prev) => {
      let newData = prev;
      newData.pop();
      return newData.map((d) => d);
    });
  };

  //Functionality when user click en basic button
  const handleResult = () => {
    if (method === 1) {
      const dynamicResult = dynamicProgramming(data);
      setResult([dynamicResult.cost, dynamicResult.path.join('->')])
    } else if (method === 2){
      const branchBoundResult = branchBound(data);
      setResult([branchBoundResult.cost, branchBoundResult.path.join('->')])
    }
  };

  const handleChangeMethod = (event) => {
    setMethod(event.target.value);
  };

  return {
    alert,
    data,
    result,
    tree,
    method,

    handleAlertClose,
    handleChangeListValue,
    handleChangeMatrixValue,
    handleChangeMethod,
    handleListAdd,
    handleListRemove,
    handleMatrixAdd,
    handleMatrixRemove,
    handleResult,
    setData,
    setResult,
    setTree,
  };
};

export default useBodyUi;
