/* eslint-disable @typescript-eslint/naming-convention */
import { API_URL } from "src/constants/API_URL";
import fetch from "unfetch";

export const handlePutTrivia = (url: string, body: any) => {
	return fetch(`${API_URL}${url}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ...body }),
	}).then((res) => res.json());
};
