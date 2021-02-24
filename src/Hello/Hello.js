import React from 'react';
import Proptypes from 'prop-types';

/**
 * 안녕하세요 라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
 *
 * - `big` 값을 `true`로 설정하면 **크게** 나타납니다.
 * - `onHello` 와 `onBye` props로 설정하여 버튼이 클릭했을 때 호출 할 함수를 지정 할 수 있습니다.
 */

const Hello = ({ name, big, onHello, onBye }) => {
    return (
        <div>
            {big ? <h1>안녕하세요, {name}!</h1> : <p>안녕하세요, {name}!</p>}
            <div>
                <button onClick={onHello}>Hello</button>
                <button onClick={onBye}>Bye</button>
            </div>
        </div>
    );
};

Hello.propTypes = {
    /** 보여주고 싶은 이름 */
    name: Proptypes.string.isRequired,
    /** 이 값을 True로 설정시 h1으로 렌더링됩니다 */
    big: Proptypes.bool,
    /** Hello 버튼 누를 때 호출할 함수 */
    onHello: Proptypes.func,
    /** Bye 버튼 누를 때 호출할 함수 */
    onBye: Proptypes.func,
};

Hello.defaultProps = {
    big: false,
};

export default Hello;
