declare global {
    namespace jest {
        interface Matchers<R> {
            toMatchImage(): R;
            toMatchImageSnapshot(screenName: string): R;
        }
    }
    let jestExpect: any;
}
