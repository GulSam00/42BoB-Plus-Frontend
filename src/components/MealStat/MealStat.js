import { React, useState } from 'react';
import MealStats from './MealStats';
import './MealStat.scss';

const MealStat = () => {
  const [data, setData] = useState([
    { id: 0, value: '' },
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
  ]);
  /*
    { i: '1' }, // 총 먹은 횟수, 먹은 횟수만 받으면 됨.
    { i: '2' }, // 가장 많이 간 곳, 서초 개포 중 한 곳
    { i: '3' }, // 가장 많이 먹은 메뉴, 최상위 3개 중 랜덤으로 하나 선택, 배열로 저장해놓을까?
    { i: '4' }, // 가장 같이 먹은 사람, 먹은 기록 다 뽑아서 가장 많이 매칭된 사람 선택
  ]);
    */

  if (data.length === 0) {
    setData(prevdata => {
      return [...prevdata, {}];
    });
  }
  return (
    <div className="flex-container">
      {data &&
        data.map(object => {
          return (
            <MealStats key={object.id} info={object.value} code={object.id} />
          );
        })}
    </div>
  );
  // 4개의 자식 컴포넌트, 각 컴포넌트는 사용자의 정보에 따라 다른 값을 생성.
  // props을 줄때부터 바로 처리할 수 있도록 state의 배열 안에 해당되는 정보를 세팅해놔야 한다.
};

export default MealStat;
