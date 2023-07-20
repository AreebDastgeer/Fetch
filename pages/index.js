import React, { useState, useEffect } from "react"
import Image from 'next/image'
const Abc = () => {
	const [dataStore, setDataStore] = useState(null)

	const getData = () => {
		return fetch("https://random-data-api.com/api/users/random_user?size=9").then((completeResponse) =>
			completeResponse.json()
		)
	}

	const setData = () => {
		getData().then((data) => {
			setDataStore(data)
		})
	}

	useEffect(() => {
		setData()
	}, [])

	return <div >
		<div className="flex justify-end items-center m-3 p-2">
			<input
				type="text"
				placeholder="Search Users"
				className="border border-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
			/>
		</div>
		<h1 className="text-5xl font-serif tracking-wide  p-3 mx-12">Users</h1>
		<div className="flex justify-around">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 mx-2 md:mx-5 lg:mx-15">
				{dataStore?.map(({ id, first_name, last_name, employment, address, subscription, avatar }) => {
					return <div className="my-12 "
						key={id}>
						<div className="  ">
							<div className="flex bg-slate-50 m-3 h-60 rounded-2xl space-x-2 py-5 px-5 hover:bg-white hover:scale-110 hover:border-2 hover:cursor-pointer hover:shadow-lg border-slate-400">
								<div className=" relative h-32 w-32">
									<Image alt="No Img..." src={avatar}  width={100} height={100} quality={90}  />
								</div>
								<div className="my-auto">
									<h1 className="font-bold"> {first_name + " " + last_name}</h1>
									<h5 className="font-semibold" >{address.city}</h5>
									<h2 className="mt-2">{employment.title}</h2>
									<div className="flex flex-wrap space-x-1 mt-2">
										<div className="rounded-3xl text-gray-400 shadow-sm items-center py-1 px-2 border-2 mb-1">
											{subscription.plan}
										</div>
										<div className="rounded-3xl text-gray-400 shadow-sm items-center py-1 px-2 border-2 mb-1">
											{subscription.status}
										</div>
									</div>
									<b><hr /></b>

								</div>
							</div>
						</div>
					</div>

				})}
			</div>
		</div>
	</div>

};

export default Abc;