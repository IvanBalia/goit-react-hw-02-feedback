export function onLeaveFeedback(object, item, foo) {
    for (let key in object) {
        if (`${key}` === item) {
            foo(key)
            };
        };
    }