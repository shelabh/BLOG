
import mongoose from 'mongoose';


const Connection = async () => {
	try {
		const URL =  'mongodb://user:globalearthcitizen@blogweb-shard-00-00.zzfaz.mongodb.net:27017,blogweb-shard-00-01.zzfaz.mongodb.net:27017,blogweb-shard-00-02.zzfaz.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-9x57tb-shard-0&authSource=admin&retryWrites=true&w=majority'

		await mongoose.connect(URL, { useNewUrlPaser: true, useUnifiedToplogy: true, useFindAndModify: false });
		console.log("Databse connected succesfully");
	}
	catch(error) {
		console.log('Error while connecting to MongoDB', error);

	}

}

export default Connection;