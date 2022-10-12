const mouseSteps = {
    [Symbol.iterator]: function () {
        let step = 0;
        return {
            next() {
                step++;
                if (step == 1) {
                    return { value: step, done: false }
                }

                return { value: '', done: true };
            }
        }
    }
}

for (step of mouseSteps) {
    console.log(step)
}
