const climbingStrairs = (n) => {
        // n = 2
    let dosPasos = 0, unPasos= 1, total = 0;
    for(let i = 1; i<=n; i++){
        total = dosPasos + unPasos;
        dosPasos = unPasos;
        unPasos = total;
    }

    return total;

  }

  console.log(climbingStrairs(3))