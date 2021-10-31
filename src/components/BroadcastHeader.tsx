import type { VFC } from "react";
import { memo } from "react";
import { BroadcastStatus } from "src/components/BroadcastStatus";
import { statusCheck } from "src/components/functions/statusCheck";
import { Title } from "src/components/Title";
import { styled } from "src/utils";

type Props = {
	title: string;
	status: "live" | "upcoming" | "ended";
};

export const BroadcastHeader: VFC<Props> = memo((props) => {
	const result = statusCheck(props.status);
	return (
		<Root>
			<BroadcastStatus color={result.color}>{result.label}</BroadcastStatus>
			<Title center>{props.title}</Title>
		</Root>
	);
});

const Root = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "1rem",
});
