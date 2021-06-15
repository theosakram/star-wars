import { _axios } from "./_axios";
import { Dispatch } from "react";

export class Dispatcher {
	url: string;
	dispatch: Dispatch<ReducerAction>;
	constructor(url: string, dispatch: Dispatch<ReducerAction>) {
		this.url = url;
		this.dispatch = dispatch;
	}

	async get(props: DispatcherProps) {
		try {
			this.dispatch({ type: props.loading, value: true });

			const { data } = await _axios.get(this.url + props.url);
			this.dispatch({ type: props.success, value: data });
		} catch (error) {
			this.dispatch({ type: props.err, value: error.message });
		} finally {
			this.dispatch({ type: props.loading, value: false });
		}
	}
}
