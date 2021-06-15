import { ReactElement } from "react";
import { FC } from "react";

interface EmptyDataProps {
	children: ReactElement;
	watchedValue: any[] | Object;
}

export const EmptyDataWrapper: FC<EmptyDataProps> = ({
	children,
	watchedValue,
}) => {
	if (Array.isArray(watchedValue) && !watchedValue.length) {
		return <h1>There are no data</h1>;
	}

	if (!Object.keys(watchedValue).length) {
		return <h1>There are no data</h1>;
	}

	return children;
};
