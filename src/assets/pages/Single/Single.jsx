import Header from "../../components/Header/Header";
import Comment from "../../components/Comment/Comment";
import "./Single.css";

const Single = () => {
	//CAROUSEL
	const slidesInfo = [
		{
			"id": 0,
			"title": "Blog Single",
			"tag": "Blog",
			"imageSrc": "./src/assets/images/bg_1.jpg"
		}
	];

	//COMMENTS
	const commentPlaceholder = {
		username: "Jean Doe",
		imageSrc: "./src/assets/images/person_1.jpg",
		url: "#",
		text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
			Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, 
			fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?`,
		date: "June 27, 2018",
		time: "2:21pm"
	};
	const commentsInfo = [
		{
			comment: {...commentPlaceholder},
			replies: []
		},
		{
			comment: {...commentPlaceholder},
			replies: [
				{
					comment: {...commentPlaceholder},
					replies: [
						{
							comment: {...commentPlaceholder},
							replies: [
								{
									comment: {...commentPlaceholder},
									replies: []
								}
							]
						}
					]
				}
			]
		},
		{
			comment: {...commentPlaceholder},
			replies: []
		},
	];

	const displayComments = (commentsInfo, replyTo="0") => {
		return commentsInfo.map((el, index) => {
			const currComm = el.comment;
			const replyChain = replyTo + "-" + index + 1;
			return (<Comment
				username={currComm.username}
				imageSrc={currComm.imageSrc}
				url={currComm.url}
				text={currComm.text}
				date={currComm.date}
				time={currComm.time}
				replyTo={replyTo}
				number={replyChain}
				replies={(el.replies.length) ? displayComments(el.replies, replyChain) : []}
				key={replyChain}
			/>);
		});
	}

	return (
		<>
			<Header slidesInfo={slidesInfo} currentPage="Home" />
			<main id="single">
				<div className="pageContainer">
					<article>
						<h2>#1. We Love WordPress Themes</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, 
							quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam 
							porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. 
							Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt 
							molestiae voluptates soluta architecto tempora.
						</p>
						<img src="./src/assets/images/image_6.jpg" alt="" />
						<p>
							Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat 
							sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem 
							soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet 
							fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!
						</p>
						<h2>#2. Creative WordPress Themes</h2>
						<p>
							Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. 
							Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. 
							Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur 
							quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.
						</p>
						<img src="./src/assets/images/image_8.jpg" alt="" />
						<p>
							Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, 
							est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel 
							ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. 
							Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.
						</p>
						<p>
							Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! 
							Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo 
							soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. 
							Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.
						</p>
						<p>
							Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor 
							distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci 
							modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. 
							Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. 
							Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!
						</p>
						<p>
							Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci 
							quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi 
							debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, 
							pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, 
							rerum ipsa debitis, inventore?
						</p>
						<div className="tags">
							<a href="#" className="tag">life</a>
							<a href="#" className="tag">sport</a>
							<a href="#" className="tag">tech</a>
							<a href="#" className="tag">travel</a>
						</div>
					</article>
					<article>
						<div className="about_author">
							<div className="image">
								<img src="./src/assets/images/person_1.jpg" alt="" />
							</div>
							<div className="content">
								<h3>About The Author</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, 
									autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam 
									vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
								</p>
							</div>
						</div>
					</article>
					<div className="commentsContainer">
						<h3>6 Comments</h3>
						{displayComments(commentsInfo, "0")}
					</div>
					<div className="newComment">
						<h3>Leave a Comment</h3>
						<form action="" name="newComment">
							<div className="formField">
								<label htmlFor="userName">Name *</label>
								<input type="text" id="userName" autoComplete="off" required />
							</div>
							<div className="formField">
								<label htmlFor="email">Email *</label>
								<input type="email" id="email" autoComplete="off" required />
							</div>
							<div className="formField">
								<label htmlFor="website">Website</label>
								<input type="url" id="website" autoComplete="off" />
							</div>
							<div className="formField">
								<label htmlFor="commentText">Message</label>
								<textarea id="commentText" autoComplete="off" cols="30" rows="10"></textarea>
							</div>
							<div className="formField">
								<input type="submit" name="submit" value="Post Comment" />
							</div>
						</form>
					</div>
				</div>
			</main>
		</>
	);
};

export default Single;

