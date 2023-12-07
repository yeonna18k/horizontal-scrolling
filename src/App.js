import styled from "styled-components";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/counter";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Card from "./components/Card";
import { LeftArrow, RightArrow } from "./components/arrows";

function App() {
  const [colors, setColors] = useState([]);
  const [page, setPage] = useState(1);
  // console.log(page);

  const scrollVisibility = useContext(VisibilityContext);

  // intersection-observer 라이브러리 변수 선언, ref로 지정해 준 특정 영역에 도달하면 inView가 true로 반환됨
  const [ref, inView] = useInView();
  // axios로 json파일에서 항목 가져오기
  const fetchColors = async () => {
    await axios
      .get(`http://localhost:4000/todos?_page=${page}&_limit=20`)
      .then((res) => {
        // console.log(res.data);
        setColors([...colors, ...res.data]);
      });
    setPage(page + 1);
  };
  // 첫 렌더링 시 fetchColors 실행
  useEffect(() => {
    fetchColors();
  }, []);
  // 무한스크롤 실행
  useEffect(() => {
    if (inView) {
      // console.log("hihi");
      fetchColors();
    }
  }, [inView]);

  // console.log(colors);
  const onClickMoreHandler = () => {};
  //
  return (
    <>
      <div>ColorList</div>
      {/* 가로스크롤 */}
      <div>horizontal Scroll</div>
      <ScrollMenu
        style={{ display: "flex" }}
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
      >
        {/* {colors.map(({ title, contents }) => {
          return <Card title={title} contents={contents} key={title} />;
        })} */}

        {colors.map(({ title, contents }) => {
          return <Card title={title} contents={contents} key={title} />;
        })}
      </ScrollMenu>{" "}
      {/* 무한스크롤 */}
      <div>Infinite Scroll</div>
      {colors.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              border: "1px solid black",
              width: "200px",
              height: "100px",
            }}
          >
            <h1>{item.title}</h1>
            <h3>{item.contents}</h3>
          </div>
        );
      })}
      <div ref={ref} style={{ height: "300px" }}>
        More
      </div>
    </>
  );
}

const Block = styled.div`
  width: 100px;
  height: 200px;
  border: 1px soild pink;
  display: inline-block;
`;

export default App;
