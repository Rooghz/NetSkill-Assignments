loop1: for (let i = 1; i <= 100; i++) {
    if (i < 200) {
      continue loop1;
    }
    console.log(i);
  }
  
// It will not show any output, because i is less than 200 (1-100 MIN-MAX).