import { Table, Thead, Tbody, Tr, Th, Td, Checkbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function Home() {
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900">
			👋 Hello world
			<table className="min-w-full divide-y divide-gray-200">
				<thead>
					<tr>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Day
						</th>
						<th
							scope="col"
							className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Attending
						</th>
					</tr>
				</thead>
				<tbody>
					{days.map((day) => (
						<tr key={day}>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex items-center">
									<div className="text-sm font-medium text-white-900">
										{day}
									</div>
								</div>
							</td>
							<td className="px-6 py-4 whitespace-nowrap">
								<div className="flex items-center">
									<input
										type="checkbox"
										className="h-5 w-5 text-indigo-600"
										id={`attending-${day}`}
									/>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	);
}
