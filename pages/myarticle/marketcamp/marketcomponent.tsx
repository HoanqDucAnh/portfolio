import CodeBlock from "@/components/common/codeblock";
import {
	sqlCode,
	Table1,
	Table2,
	Table3,
	Table4,
	Table5,
	Table6,
	Table7,
} from "../../../components/data/marketcamp/marketcampdata";
import React from "react";
import SqlTable from "@/components/common/tabledata";
import { Link as NavLink } from "react-scroll";

export default function MarketComponent() {
	return (
		<div className="grid grid-cols-5 mt-24 ">
			<div className="col-span-1 mt-10 hidden lg:flex pl-9 self-start scrollspy-sticky">
				<div className="">
					<h6 className="text-3xl">Table content</h6>
					<ul>
						<li className="scrollspy-item ">
							<NavLink
								to="title"
								spy={true}
								smooth={true}
								offset={-80}
								duration={50}
								activeClass="scrollspy-active "
							>
								Marketing Campaign Success
							</NavLink>
						</li>
						<li className="scrollspy-item ">
							<NavLink
								to="prompt"
								spy={true}
								smooth={true}
								offset={-80}
								duration={50}
								activeClass="scrollspy-active"
							>
								Prompt
							</NavLink>
						</li>
						<li>
							<NavLink
								to="tbls&data"
								spy={true}
								smooth={true}
								offset={-80}
								duration={50}
								activeClass="scrollspy-active "
								className="scrollspy-item "
							>
								Tables and Data
							</NavLink>
							<ul className="ml-4">
								<li className="scrollspy-item ">
									<NavLink
										to="undData"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scrollspy-active"
									>
										Understand the data
									</NavLink>
								</li>
								<li className="scrollspy-item ">
									<NavLink
										to="prblState"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scrollspy-active"
									>
										Problem Statement
									</NavLink>
								</li>
							</ul>
						</li>
						<li>
							<NavLink
								to="solution"
								spy={true}
								smooth={true}
								offset={-80}
								duration={50}
								activeClass="scrollspy-active "
								className="scrollspy-item "
							>
								Solution
							</NavLink>
							<ul className="ml-4">
								<li className="scrollspy-item ">
									<NavLink
										to="step1"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scrollspy-active "
									>
										Step 1: Filter out ‘first-day’ users
									</NavLink>
								</li>
								<li className="scrollspy-item ">
									<NavLink
										to="step2"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scrollspy-active "
									>
										Step 2: Filter out ‘repeating purchase’ user
									</NavLink>
									<ul className="ml-4">
										<li className="scrollspy-item ">
											<NavLink
												to="step2-1"
												spy={true}
												smooth={true}
												offset={-80}
												duration={50}
												activeClass="scrollspy-active "
											>
												Step 2.1: Create a ranking column
											</NavLink>
										</li>
										<li className="scrollspy-item ">
											<NavLink
												to="step2-2"
												spy={true}
												smooth={true}
												offset={-80}
												duration={50}
												activeClass="scrollspy-active "
											>
												Step 2.2: Create temp table for first days purchase
											</NavLink>
										</li>
										<li className="scrollspy-item ">
											<NavLink
												to="step2-3"
												spy={true}
												smooth={true}
												offset={-80}
												duration={50}
												activeClass="scrollspy-active "
											>
												Step 2.3: Create temp table for other days purchase
											</NavLink>
										</li>
									</ul>
								</li>
								<li className="scrollspy-item ">
									<NavLink
										to="step3"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scrollspy-active "
									>
										Step 3: Left Join First and Others:
									</NavLink>
								</li>
								<li className="scrollspy-item ">
									<NavLink
										to="bring2Gether"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scrollspy-active"
									>
										Step 4: Bring it all together
									</NavLink>
								</li>
								<li className="scrollspy-item ">
									<NavLink
										to="res"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scrollspy-active "
									>
										Result
									</NavLink>
								</li>
							</ul>
						</li>
						<li>
							<NavLink
								to="optimi"
								spy={true}
								smooth={true}
								offset={-80}
								duration={50}
								activeClass="scrollspy-active "
								className="scrollspy-item "
							>
								Query optimizations Solutions
							</NavLink>
							<ul className="ml-4">
								<li className="scrollspy-item ">
									<NavLink
										to="res2"
										spy={true}
										smooth={true}
										offset={-80}
										duration={50}
										activeClass="scrollspy-active "
									>
										Result
									</NavLink>
								</li>
							</ul>
						</li>
						<li className="scrollspy-item ">
							<NavLink
								to="conclusion"
								spy={true}
								smooth={true}
								offset={-80}
								duration={50}
								activeClass="scrollspy-active "
							>
								Conclusion
							</NavLink>
						</li>
						<li className="scrollspy-item ">
							<NavLink
								to="sqlTableScript"
								spy={true}
								smooth={true}
								offset={-80}
								duration={50}
								activeClass="scrollspy-active "
							>
								SQL Tables Scripts
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<div className="lg:col-span-3 md:col-span-5 section-container min-h-screen mb-24 text-center">
				<section id="title">
					<h1 className="text-4xl text-[#f27d0d]">
						Marketing Campaign Success
					</h1>
					<p className="text-xs mt-1">
						By <strong>Mark Pham</strong>{" "}
						<span className="text-[#f27d0d]">|</span> May 20, 2023{" "}
						<span className="text-[#f27d0d]">|</span> Topic: CTE, Count(),
						Distinct() RANK() OVER(partition by order by)
					</p>
				</section>
				<div className="text-xs m-5 text-justify">
					<section id="prompt">
						<div className="mb-5">
							<span className="text-[#f27d0d]">Prompt: </span>Imagine you are an
							analyst for a marketing team. You have a table of in-app purchases
							by user. Users who make their first in-app purchase are placed in
							a marketing campaign where they see call-to-actions for more
							in-app purchases. Find the number of users that made additional
							in-app purchases due to the success of the marketing campaign.
						</div>
						<div className="mb-5">
							<p>
								The marketing campaign doesn't start until one day after the
								initial in-app purchase so users that only made one or multiple
								purchases on the first day do not count, nor do we count users
								that over time purchase only the products they purchased on the
								first day.
							</p>
						</div>
					</section>
					<section id="tbls&data">
						<section id="undData">
							<div className="mb-2">
								<h2 className="text-3xl text-[#f27d0d]">Tables and Data</h2>
								<p className="text-xl mt-2 text-[#f27d0d]">
									Understanding the data
								</p>
							</div>
							<div className="mb-5">
								<ul style={{ listStyleType: "circle" }}>
									The <code>marketing_campaign</code> table contains the
									following columns:
									<li style={{ marginLeft: "2rem" }} className="m-1">
										<code>user_id:</code> The unique identifier for each user.
									</li>
									<li style={{ marginLeft: "2rem" }} className="mb-1">
										<code>product_id:</code> The unique identifier for each
										in-app product.
									</li>
									<li style={{ marginLeft: "2rem" }} className="mb-1">
										<code>purchase_date:</code> The timestamp when the in-app
										purchase was made.
									</li>
								</ul>
								<p>
									Now that we understand the data, let's define the problem
									statement.
								</p>
							</div>
						</section>
						<section id="prblState">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									The Problem Statement
								</p>
							</div>
							<div className="mb-5">
								<ol style={{ listStyleType: "decimal" }}>
									We need to find the number of users who made additional in-app
									purchases due to the success of a marketing campaign. However,
									there are a few conditions that need to be met for a user to
									be considered to have made additional in-app purchases:
									<li style={{ marginLeft: "2rem" }} className="m-1">
										Users who made their first in-app purchase are placed in the
										marketing campaign.
									</li>
									<li style={{ marginLeft: "2rem" }} className="mb-1">
										The marketing campaign doesn't start until one day after the
										initial in-app purchase.
									</li>
									<li style={{ marginLeft: "2rem" }} className="mb-1">
										Users who only made one or multiple purchases on the first
										day do not count.
									</li>
									<li style={{ marginLeft: "2rem" }} className="mb-1">
										Users who over time purchase only the products they
										purchased on the first day do not count.
									</li>
								</ol>
								<p>
									With these conditions in mind, let's break down the code and
									explain each part.
								</p>
							</div>
						</section>
					</section>
					<section id="solution">
						<div className="mb-2">
							<p className="text-3xl mt-2 text-[#f27d0d]">Solution</p>
						</div>
						<p className="mb-2">Let's take a look at the tables again:</p>
						<div className="mb-2">
							<CodeBlock language="sql" code={sqlCode.code1} />
						</div>
						<div className="mb-5">
							<SqlTable
								tableTitle={Table1.tableTitle}
								tableCol={Table1.tableCol}
								tableData={Table1.tableData}
							/>
						</div>
						<section id="step1">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									Step 1: Filter out 'first-day' users
								</p>
							</div>
							<div className="mb-2">
								<p className="mb-2">
									Users that only made one or multiple purchases on the first
									day do not count. Let's find the list of users who only
									purchase for one day.
								</p>
								<div className="mb-2">
									<CodeBlock language="sql" code={sqlCode.code2} />
								</div>
								<SqlTable
									tableTitle={Table2.tableTitle}
									tableCol={Table2.tableCol}
									tableData={Table2.tableData}
								/>
							</div>
						</section>
						<section id="step2">
							<section id="step2-1">
								<div className="mb-2">
									<p className="text-xl mt-2 text-[#f27d0d]">
										Step 2.1: Create a ranking column
									</p>
								</div>
								<div className="mb-2">
									<p>
										Alright, now we have to determine each user's 'first day'.
										We will accomplish this by creating a ranking column as
										follows using rank() over(partition by/order by)
									</p>
								</div>
								<div className="mb-2">
									<CodeBlock language="sql" code={sqlCode.code3} />
								</div>
								<div className="mb-2">
									<p>Let's put this query into a CTE, call it cte1:</p>
								</div>
								<div className="mb-2">
									<CodeBlock language="sql" code={sqlCode.code4} />
								</div>
								<div className="mb-2">
									<SqlTable
										tableTitle={Table3.tableTitle}
										tableCol={Table3.tableCol}
										tableData={Table3.tableData}
									/>
								</div>
							</section>
							<section id="step2-2">
								<div className="mb-2">
									<p className="text-xl mt-2 text-[#f27d0d]">
										Step 2.2: Find the first day of each user
									</p>
								</div>
								<div className="mb-2">
									<p>
										Now, from the cte1, we will the next temp table, call first
										(first-day purchase), where cte1.ranking = 1. The result
										will be a list of product that each user_id buy on their
										first-day purchase
									</p>
								</div>
								<div className="mb-2">
									<CodeBlock language="sql" code={sqlCode.code6} />
								</div>
								<div className="mb-2">
									<SqlTable
										tableTitle={Table4.tableTitle}
										tableCol={Table4.tableCol}
										tableData={Table4.tableData}
									/>
								</div>
							</section>
							<section id="step2-3">
								<div className="mb-2">
									<p className="text-xl mt-2 text-[#f27d0d]">
										Step 2.3: Create temp table for other days purchase
									</p>
								</div>
								<div className="mb-2">
									<CodeBlock language="sql" code={sqlCode.code7} />
								</div>
								<div className="mb-2">
									<SqlTable
										tableTitle={Table5.tableTitle}
										tableCol={Table5.tableCol}
										tableData={Table5.tableData}
									/>
								</div>
							</section>
						</section>
						<section id="step3">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									Step 3: Left Join First and Others
								</p>
							</div>
							<div className="mb-2">
								<p>
									We will perform a left join on the others CTE and the first
									CTE. The idea is to see if there’s any user who only purchase
									the first-day product.
								</p>
							</div>
							<div className="mb-2">
								<CodeBlock language="sql" code={sqlCode.code8} />
							</div>
							<div className="mb-2">
								<SqlTable
									tableTitle={Table6.tableTitle}
									tableCol={Table6.tableCol}
									tableData={Table6.tableData}
								/>
							</div>
							<div className="mb-2">
								<p>
									We can see that a couple of users there are a couple of users
									that only purchase the first-day product. Let’s remove these
									usersthese user by using the IS NULL function on the
									first_day_purchase. After that, we can use the COUNT(Distinct)
									function to count the number of users that made additional
									in-app purchases due to the success of the marketing campaign
								</p>
							</div>
							<div className="mb-2">
								<CodeBlock language="sql" code={sqlCode.code9} />
							</div>
							<div className="mb-2">
								<SqlTable
									tableTitle={Table7.tableTitle}
									tableCol={Table7.tableCol}
									tableData={Table7.tableData}
								/>
							</div>
						</section>
						<section id="bring2Gether">
							<div className="mb-2">
								<p className="text-xl mt-2 text-[#f27d0d]">
									Step 4: Bring it All Together
								</p>
							</div>
							<div className="mb-2">
								<CodeBlock language="sql" code={sqlCode.code10} />
							</div>
						</section>
						<section id="res">
							<div className="mb-5">
								<p className="text-xl mt-2 text-[#f27d0d]">Result</p>
								<div className="mb-1">
									<p>
										Execution time: 0.02640 seconds
										<br />
										Total User: 23
										<br />
										The result is as expected 23 total_users.
										<br />
										Hooray, but is this the most optimized solution? Let's think
										about this again.
									</p>
								</div>
							</div>
						</section>
					</section>
					<section id="optimi">
						<div className="mb-2">
							<p className="text-3xl mt-2 text-[#f27d0d]">
								Query Optimization Solutions
							</p>
						</div>
						<div className="mb-2">
							<p>
								Let’s think of another more readable solution thatsolution that
								is more readable and does not have to use the join statement.
							</p>
						</div>
						<div className="mb-2">
							<CodeBlock language="sql" code={sqlCode.code11} />
						</div>
						<div className="mb-2">
							<p>
								The following query makesmake sure the user purchases multiple
								items in multiple days
							</p>
						</div>
						<div className="mb-2">
							<CodeBlock language="sql" code={sqlCode.code12} />
						</div>
						<div className="mb-2">
							<CodeBlock language="sql" code={sqlCode.code13} />
						</div>
						<div className="mb-2">
							<p className="text-xl mt-2 text-[#f27d0d]">Result:</p>
						</div>
						<div className="mb-5">
							<p>
								Execution time: 0.01373 seconds
								<br />
								Total_user: 28
							</p>
						</div>
					</section>
					<section id="conclusion">
						<div className="mb-2">
							<p className="text-3xl mt-2 text-[#f27d0d]">Conclusion:</p>
						</div>
						<div className="mb-5">
							<ul style={{ listStyleType: "circle" }}>
								Regarding this problem, the key takeaways is as follow:
								<li style={{ marginLeft: "2rem" }} className="m-1">
									Understand Window function: RANK(), partition by, order by
								</li>
								<li style={{ marginLeft: "2rem" }} className="mb-1">
									Understand self join, left join vs inner join
								</li>
								<li style={{ marginLeft: "2rem" }} className="mb-1">
									Understand CTE and subqueries
								</li>
								<li style={{ marginLeft: "2rem" }} className="mb-1">
									Date manipulation function
								</li>
								<li style={{ marginLeft: "2rem" }} className="mb-1">
									Aggregate function
								</li>
							</ul>
						</div>
					</section>
					<section id="sqlTableScript">
						<div className="mb-2">
							<p className="text-3xl mt-2 text-[#f27d0d]">SQL Tables Scripts</p>
						</div>
						<div className="mb-2">
							<CodeBlock language="sql" code={sqlCode.code14} />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
