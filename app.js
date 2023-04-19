function iterativeMethod(arr, s, steps, approximation) {
  const n = arr.length; // количество уравнений
  let x = new Array(n).fill(0); // начальное приближение

  for (let k = 0; k < steps; k++) {
    let newX = new Array(n).fill(0); // новое приближение
    for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let j = 0; j < n; j++) {
        if (i !== j) {
          sum += arr[i][j] * x[j];
        }
      }
      newX[i] = (s[i] - sum) / arr[i][i]; // вычисляем новое значение i-й переменной
    }
    // проверяем, достаточно ли точное приближение уже найдено
    if (Math.abs(newX[n - 1] - x[n - 1]) < approximation) {
      return newX;
    }
    x = newX;
  }
  return x; // возвращаем последнее приближение
}