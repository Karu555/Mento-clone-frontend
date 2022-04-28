import {ALL_TOPICS} from "./actionType"

 const allTopics = (Data) => {
    return {
        type: ALL_TOPICS,
        payload: Data,
    };
};

const handleloading = () => ({
    type : "LOADING"
})

const handleError = () => ({
    type : "ERROR"
})


export { allTopics , handleloading, handleError}