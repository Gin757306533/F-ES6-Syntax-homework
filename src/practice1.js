const parseData = (inputData) => {
    const {data, column} = inputData;
    const keys = column.map(item => item.name);
    return data.map((row) =>
            row.reduce((res, field, index) => {
                res[keys[index]] = field;
                return res;
            }, {})
        );
}
export { parseData };
