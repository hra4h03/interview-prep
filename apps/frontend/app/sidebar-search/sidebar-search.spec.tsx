import { render } from '@testing-library/react';

import SidebarSearch from './sidebar-search';

describe('SidebarSearch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SidebarSearch />);
    expect(baseElement).toBeTruthy();
  });
});
