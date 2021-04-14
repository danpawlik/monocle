// Monocle.
// Copyright (C) 2019-2020 Monocle authors

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import React from 'react'

class Footer extends React.Component {
  render () {
    const date = new Date().getFullYear()
    // eslint-disable-next-line react/jsx-no-target-blank
    const a = <span className="text-muted"><a className="nav-link" href="https://github.com/change-metrics/monocle" target="_blank" rel="noopener">Powered by Monocle, {date}</a></span>
    return <footer className="bd-footer p-3 bg-light text-right text-sm-start"><div className="container">{a}</div></footer>
  }
}

export default Footer
