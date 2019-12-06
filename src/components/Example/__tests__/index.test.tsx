import React from 'react';
import { shallow } from 'enzyme';
import Example from '@src/components/Example';

describe('<Example />', (): void => {
  it('ボタン と テキスト が表示される', (): void => {
    const wrapper = shallow(
      <Example text="hoge" flag action={(): void => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('button が3つ表示される', (): void => {
    const wrapper = shallow(
      <Example text="hoge" flag action={(): void => {}} />
    );
    expect(wrapper.find('button')).toHaveLength(3);
  });

  it('text に指定した文字が最初の文字に表示される', (): void => {
    const wrapper = shallow(
      <Example text="hoge" flag action={(): void => {}} />
    );
    expect(wrapper.find('p')).toHaveLength(2);
    expect(
      wrapper
        .find('p')
        .at(0)
        .text()
    ).toBe('hoge');
  });

  it('flag を false にすると text は表示されない', (): void => {
    const wrapper = shallow(
      <Example text="hoge" flag={false} action={(): void => {}} />
    );
    expect(wrapper.find('p')).toHaveLength(1);
    expect(
      wrapper
        .find('p')
        .at(0)
        .text()
        .startsWith('count:')
    ).toBeTruthy();
  });

  it('1番目のボタンをクリックすると、action に渡した関数が呼ばれる', (): void => {
    const actionMock = jest.fn();
    const wrapper = shallow(<Example text="hoge" flag action={actionMock} />);
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(actionMock).toHaveBeenCalled();
  });

  it('2番目のボタンをクリックすると、カウントが 1 増加する', (): void => {
    const wrapper = shallow(
      <Example text="hoge" flag action={(): void => {}} />
    );
    expect(
      wrapper
        .find('p')
        .at(1)
        .text()
    ).toBe('count:0');

    wrapper
      .find('button')
      .at(1)
      .simulate('click');

    expect(
      wrapper
        .find('p')
        .at(1)
        .text()
    ).toBe('count:1');
  });

  it('3番目のボタンをクリックすると、カウントが 1 減少する', (): void => {
    const wrapper = shallow(
      <Example text="hoge" flag action={(): void => {}} />
    );
    expect(
      wrapper
        .find('p')
        .at(1)
        .text()
    ).toBe('count:0');

    wrapper
      .find('button')
      .at(2)
      .simulate('click');

    expect(
      wrapper
        .find('p')
        .at(1)
        .text()
    ).toBe('count:-1');
  });
});
