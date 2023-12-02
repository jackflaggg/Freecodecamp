let styles  = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.ceil(styles.length / 2) - 1] = "Классика";
styles.shift();
styles.unshift("Рэп", "Регги");
console.log(styles)