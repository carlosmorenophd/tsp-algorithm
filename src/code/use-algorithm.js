const useAlgorithm = () => {
  const dynamicProgramming = (graph) => {
    const result = dynamicProgrammingImplementation({ graph });
    return result;
  };

  const dynamicProgrammingImplementation = ({ graph }) => {
    const n = graph.length;
    const dp = {};
    const path = {};
    function tsp(mask, pos) {
      if (mask === (1 << n) - 1) {
        return { cost: graph[pos][0], path: [0] };
      }
      const key = `${mask}-${pos}`;
      if (dp.hasOwnProperty(key)) {
        return dp[key];
      }
      let minCost = Infinity;
      // let next = -1;
      for (let city = 0; city < n; city++) {
        if ((mask & (1 << city)) === 0) {
          const newMask = mask | (1 << city);
          const { cost, path: subPath } = tsp(newMask, city);
          const totalCost = graph[pos][city] + cost;
          if (totalCost < minCost) {
            minCost = totalCost;
            // next = city;
            path[key] = [pos, ...subPath];
          }
        }
      }
      dp[key] = { cost: minCost, path: path[key] };
      return dp[key];
    }
    const { cost, path: tspPath } = tsp(1, 0);
    return { cost, path: fixLastCity(tspPath) };
  };

  const fixLastCity = (path) => {
    for (let i = 1; i < path.length; i++) {
      if (path.indexOf((item) => item === i) === -1) {
        path[path.length - 1] = i - 1;
      }
    }
    path.push(0);
    return path;
  };

  const branchBound = (graph) => {
    const result = branchBoundImplementation({ graph });
    return result;
  };

  const branchBoundImplementation = ({ graph }) => {
    const n = graph.length;
    let minCost = Infinity;
    let bestPath = [];
  
    function tspRecursive(currPath, currCost, visited, count, currVertex) {
      console.log("Log ",currPath, currCost, visited, count, currVertex);
      if (count === n && graph[currVertex][0] > 0) {
        currCost += graph[currVertex][0];
        if (currCost < minCost) {
          minCost = currCost;
          bestPath = currPath.slice();
        }
        return;
      }
  
      for (let nextVertex = 0; nextVertex < n; nextVertex++) {
        if (
          !visited[nextVertex] &&
          graph[currVertex][nextVertex] > 0 &&
          currCost + graph[currVertex][nextVertex] < minCost
        ) {
          visited[nextVertex] = true;
          currPath.push(nextVertex);
  
          tspRecursive(
            currPath,
            currCost + graph[currVertex][nextVertex],
            visited,
            count + 1,
            nextVertex
          );
  
          visited[nextVertex] = false;
          currPath.pop();
        }
      }
    }
  
    const initialPath = [0];
    const initialCost = 0;
    const visited = Array(n).fill(false);
    visited[0] = true;
  
    tspRecursive(initialPath, initialCost, visited, 1, 0);
  
    return { cost: minCost, path: bestPath };
  };

  return {
    branchBound,
    dynamicProgramming,
  };
};

export { useAlgorithm };
