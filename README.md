# Programa para calcular el camino más corto y el problema del coste mínimo del viajero (TSP) mediante programación dinámica y branch and pruning. (Español)

## Introducción

El TSP (Traveling Salesman Problem) o Problema del Viajante de Comercio es un problema de optimización combinatoria en el campo de la teoría de grafos. En esencia, el TSP busca encontrar la ruta más corta que un viaje de comercio puede tomar para visitar un conjunto de ciudades dado, pasando exactamente una vez por cada ciudad y regresando al punto de partida.

El objetivo del TSP es minimizar la distancia total recorrida o el costo asociado a visitar todas las ciudades sin repetir ninguna. Es un problema NP-duro, lo que significa que no se conocen algoritmos eficientes que encuentren la solución óptima en tiempo polinomial para todas las instancias posibles.

Dado un conjunto de ciudades y las distancias entre ellas, el TSP implica encontrar la permutación óptima de las ciudades para minimizar la distancia total recorrida. Esto se puede representar como un grafo completo, donde las ciudades son los vértices y las distancias entre ellas son los pesos de las aristas. El objetivo es encontrar el ciclo hamiltoniano de longitud minima en este grafo.

## La programación dinámica

La programación dinámica es una técnica utilizada para resolver problemas de optimización dividiéndolos en subproblemas superpuestos y resolviendo cada subproblema solo una vez. Es particularmente útil para problemas que exhiben la propiedad de superposición de subproblemas y subestructura óptima.

Aquí hay un marco general para resolver problemas usando programación dinámica:

Definir el problema: Definir claramente el problema e identificar el objetivo o criterio de optimización.

Identifique la propiedad recursiva: determine cómo se puede expresar la solución óptima del problema original en términos de soluciones óptimas para subproblemas más pequeños. Esto se hace a menudo a través de fórmulas o relaciones recursivas.

Formule los casos base: determine los casos base o los subproblemas más pequeños que se pueden resolver directamente sin más recurrencia. Los casos base proporcionan los valores iniciales para los cálculos recursivos.

Definir la tabla de memorización: Determinar la estructura de datos para almacenar los resultados intermedios de los subproblemas. Suele ser una matriz, matriz o tabla hash, según la naturaleza del problema.

Defina la relación de recurrencia: defina la relación entre el subproblema actual y sus subproblemas más pequeños. Esto le permite calcular la solución óptima para el subproblema actual en función de las soluciones de sus subproblemas más pequeños.

Implemente el algoritmo de programación dinámica: use la iteración o la recursividad (con memoización) para completar la tabla de memoización, comenzando desde los casos base y progresando hacia la solución final.

Extraiga la solución: una vez que se llene la tabla de memorización, extraiga la solución final de la tabla según los requisitos del problema. Esto podría implicar retroceder o cálculos adicionales basados en los valores memorizados.

La programación dinámica se puede aplicar a varios problemas, como el problema de la mochila, la secuencia de Fibonacci, los problemas de la ruta más corta y muchos más. La idea clave es evitar cálculos redundantes almacenando los resultados de los subproblemas y reutilizándolos cuando sea necesario, lo que lleva a algoritmos más eficientes.

## Ejecución

![Multistage](asserts/dynamicProgramming.png)

## Acerca del autor 
Estuandite de Doctorado: Juan Carlos Moreno Sanchez

<carlos.moreno.phd@gmail.com>

<jcmorenos001@alumno.uaemex.mx>

# Program to calculate the shortest path and the minimum cost of traveler problem (TSP) using dynamic programming and branch and bound. (English)

## Introduction

The TSP (Traveling Salesman Problem) is a combinatorial optimization problem in the field of graph theory. In essence, the TSP seeks to find the shortest route that a trade trip can take to visit a given set of cities, passing through each city exactly once and returning to the starting point.

The objective of the TSP is to minimize the total distance traveled or the cost associated with visiting all the cities without repeating any. It is an NP-hard problem, which means that there are no known efficient algorithms that find the optimal solution in polynomial time for all possible instances.

Given a set of cities and the distances between them, the TSP involves finding the optimal permutation of cities to minimize the total distance traveled. This can be represented as a complete graph, where the cities are the vertices and the distances between them are the weights of the edges. The objective is to find the Hamiltonian cycle of minimum length in this graph.

## Dynamic programming

Dynamic programming is a technique used to solve optimization problems by breaking them down into overlapping subproblems and solving each subproblem only once. It is particularly useful for problems that exhibit the property of overlapping subproblems and optimal substructure.

Here is a general framework for solving problems using dynamic programming:

Define the problem: Clearly define the problem and identify the objective or criteria for optimality.

Identify the recursive property: Determine how the optimal solution to the original problem can be expressed in terms of optimal solutions to smaller subproblems. This is often done through recursive relations or formulas.

Formulate the base cases: Determine the base cases or smallest subproblems that can be solved directly without further recursion. Base cases provide the initial values for the recursive calculations.

Define the memoization table: Determine the data structure to store the intermediate results of the subproblems. This is often an array, matrix, or hash table, depending on the nature of the problem.

Define the recurrence relation: Define the relationship between the current subproblem and its smaller subproblems. This allows you to calculate the optimal solution for the current subproblem based on the solutions to its smaller subproblems.

Implement the dynamic programming algorithm: Use iteration or recursion (with memoization) to fill in the memoization table, starting from the base cases and progressing towards the final solution.

Extract the solution: Once the memoization table is filled, extract the final solution from the table based on the problem requirements. This could involve backtracking or additional calculations based on the memoized values.

Dynamic programming can be applied to various problems, such as the Knapsack problem, Fibonacci sequence, shortest path problems, and many more. The key idea is to avoid redundant calculations by storing the results of subproblems and reusing them when needed, leading to more efficient algorithms.

## Execution

![Multistage](asserts/dynamicProgramming.png)

## About the author
Student of PhD: Juan Carlos Moreno Sanchez

<carlos.moreno.phd@gmail.com>

<jcmorenos001@alumno.uaemex.mx>