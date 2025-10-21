import React, { useEffect } from 'react';
import styles from './download.module.css';
import LinkIcon from './LinkIcon';
import boards from '../config/boards';
import { useGitHubInfo } from '../hooks/useGitHubInfo';
import { translate } from '@docusaurus/Translate';

const createDownloadLink = ({ releaseVersion, configName }) =>
	releaseVersion
		? `https://github.com/OpenStickCommunity/GP2040-CE/releases/download/${releaseVersion}/GP2040-CE_${releaseVersion.substring(
				1
		  )}_${configName}.uf2`
		: '';

const RenderDownloadBox = ({
	name,
	configName,
	pinout,
	desc,
	image,
	website,
}) => {
	const releaseVersion = useGitHubInfo((state) => state.releaseVersion);
	return (
		<div key={`download-${name}`} className={styles.box}>
			<a href={website}>
				<img className={styles.boxImage} src={image} />
			</a>
			<div className={styles.boxInfo}>
				<h3 className={styles.boxTitle}>{name}</h3>
				<div>
					<ul className={styles.downloadLinks}>
						<LinkIcon
							link={createDownloadLink({ releaseVersion, configName })}
                            text={translate({
                                id: 'downloads.link.download',
                                message: 'Download',
                                description: 'Download link text',
                            })}
						/>
						<LinkIcon
							link={pinout}
							text={translate({
								id: 'downloads.link.pinout',
								message: 'Pinout',
								description: 'Pinout link text',
							})}
						/>
						<LinkIcon
							link={website}
							text={translate({
								id: 'downloads.link.website',
								message: 'Website',
								description: 'Website link text',
							})}
						/>
					</ul>
				</div>
				<div className="download-desc">{desc()}</div>
			</div>
		</div>
	);
};

const Container = ({ children }) => {
	const getInfo = useGitHubInfo((state) => state.getInfo);
	useEffect(() => {
		getInfo();
	}, []);
	return <div className={styles.row}>{children}</div>;
};

export const Microcontrollers = () => (
	<Container>
		{boards['Microcontroller Boards'].map(RenderDownloadBox)}
	</Container>
);

export const OfficialDevices = () => (
	<Container>
		{boards['Community Devices']
			.filter((config) => config.category === 'official')
			.map(RenderDownloadBox)}
	</Container>
);

export const OpenSourceDevices = () => (
	<Container>
		{boards['Community Devices']
			.filter((config) => config.category === 'open')
			.map(RenderDownloadBox)}
	</Container>
);

export const ClosedSourceDevices = () => (
	<Container>
		{boards['Community Devices']
			.filter((config) => config.category === 'closed')
			.map(RenderDownloadBox)}
	</Container>
);