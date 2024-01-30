const makePromise = (): Promise<string> => {
	return new Promise<string>((resolve, reject) => {
		const data: string = "Data is fetched";

		if (data) {
			resolve(data);
		} else {
			reject("Data is not fetched");
		}
	});
};

const getPromiseData = async (): Promise<void> => {
	const data = await makePromise();
	console.log(data);
};

type DataType = {
	data: string;
};

const makePromiseObj = (): Promise<DataType> => {
	return new Promise<DataType>((resolve, reject) => {
		const data: DataType = { data: "Data is fetched" };

		if (data) {
			resolve(data);
		} else {
			reject({ data: "Data is not fetched" });
		}
	});
};

const getPromiseDataObj = async (): Promise<void> => {
	const data = await makePromiseObj();
	console.log(data);
};
