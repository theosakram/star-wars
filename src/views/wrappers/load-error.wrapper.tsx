import { FC, ReactElement } from "react";
import { Loading } from "../components";

interface LoadErrorProps {
	children: ReactElement;
	loading: boolean;
	err: null | string;
}

export const LoadErrorWrapper: FC<LoadErrorProps> = ({
	children,
	loading,
	err,
}) => {
	if (loading) {
		return <Loading />;
	}

	if (err) {
		return <h1>{err}</h1>;
	}

	return children;
};
