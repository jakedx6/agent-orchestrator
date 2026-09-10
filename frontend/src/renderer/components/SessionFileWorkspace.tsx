import { FileContentPane } from "./FileContentPane";
import type { FileAnnotationModel } from "./WorkspaceDiffView";

export function SessionFileWorkspace({
	annotation,
	path,
	sessionId,
	split,
}: {
	annotation: FileAnnotationModel;
	path: string;
	sessionId: string;
	split: boolean;
}) {
	return (
		<section className="flex h-full min-h-0 flex-col bg-background" data-testid="session-file-workspace">
			<div className="board-scrollbar min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain">
				<FileContentPane annotation={annotation} path={path} sessionId={sessionId} split={split} />
			</div>
		</section>
	);
}
