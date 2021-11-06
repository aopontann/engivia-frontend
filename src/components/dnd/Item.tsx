import Image from "next/image";
import { memo } from "react";
import { styled } from "src/utils";

export const Item = memo((props: any) => {
	return (
		<>
			<Container>
				<p>
					{props.id}
					HTMLにはポータルという便利な要素があるHTMLにはポータルという便利な要素があるHTMLにはポータルという便利な要素がある
				</p>
				<UserCard>
					<User>
						<ImageContainer>
							<Image src="/superhero.svg" width={40} height={40} alt="superhero" />
						</ImageContainer>
						<Name>松平 ケン</Name>
					</User>
					{props.featured ? <div>８７へえ</div> : null}
				</UserCard>
			</Container>
		</>
	);
});

const Container = styled("div", {
	display: "flex",
	justifyContent: "center",
	padding: "20px",
	margin: "15px 0",
	background: "white",
	borderRadius: "10px",
	boxShadow: "0px 2px 2px gray",
	flexDirection: "column",
	gap: "14px",
	fontSize: "15px",
	userSelect: "none",
});

const UserCard = styled("div", {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
});

const ImageContainer = styled("div", {
	width: "2rem",
	height: "2rem",
	borderRadius: "9999px",
	display: "flex",
});

const User = styled("div", {
	display: "flex",
	alignItems: "center",
});

const Name = styled("div", {
	paddingX: "1rem",
	fontSize: "0.75rem",
	lineHeight: "1rem",
});